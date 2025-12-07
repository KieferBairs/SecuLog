import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { EventsContext } from "../context/EventsContext";
import { useLocalSearchParams, router } from "expo-router";

export default function AddEditEventScreen() {
  const { id } = useLocalSearchParams();
  const { events, addEvent, updateEvent } = useContext(EventsContext);
  const existingEvent = events.find((e: any) => e.id === id);
  const [title, setTitle] = useState(existingEvent?.title || "");
  const [type, setType] = useState(existingEvent?.type || "");
  const [severity, setSeverity] = useState(existingEvent?.severity || "Low");
  const [description, setDescription] = useState(existingEvent?.description || "");
  const [date, setDate] = useState(
    existingEvent?.date || new Date().toISOString().split("T")[0]
  );

  const handleSave = () => {
    const data = { title, type, severity, description, date };

    if (existingEvent) {
      updateEvent(existingEvent.id, data);
    } else {
      addEvent(data);
    }

    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Suspicious email detected"
        value={title}
        onChangeText={setTitle}
      />

      {/* Event Type Dropdown */}
<Text style={styles.label}>Event Type</Text>
<TouchableOpacity
  style={styles.dropdown}
  onPress={() => setShowTypeOptions((prev) => !prev)}
>
  <Text style={styles.dropdownText}>{type || "Select Event Type"}</Text>
</TouchableOpacity>

{showTypeOptions && (
  <View style={styles.dropdownMenu}>
    {[
      "Phishing Attempt",
      "Login Alert",
      "MFA Alert",
      "Device Activity",
      "Password Reset",
      "Network Alert",
      "System Update",
      "Other",
    ].map((option) => (
      <TouchableOpacity
        key={option}
        style={styles.dropdownItem}
        onPress={() => {
          setType(option);
          setShowTypeOptions(false);
        }}
      >
        <Text style={styles.dropdownItemText}>{option}</Text>
      </TouchableOpacity>
    ))}
  </View>
)}

{/* Severity Dropdown*


      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.multi]}
        multiline
        value={description}
        onChangeText={setDescription}
        placeholder="Optional details about the event..."
      />

      <Text style={styles.label}>Date</Text>
      <TextInput style={styles.input} value={date} onChangeText={setDate} />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>{existingEvent ? "Update Event" : "Save Event"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f9fafb" },
  label: { fontSize: 14, fontWeight: "600", marginTop: 14, marginBottom: 4 },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#d1d5db",
    padding: 10,
    borderRadius: 8,
  },
  multi: { height: 80, textAlignVertical: "top" },
  saveButton: {
    backgroundColor: "#16a34a",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 24,
  },
  saveText: { color: "white", textAlign: "center", fontWeight: "700", fontSize: 16 },
});
