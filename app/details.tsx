import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useContext } from "react";
import { EventsContext } from "../context/EventsContext";

export default function EventDetailsScreen() {
  const { id } = useLocalSearchParams();
  const { events } = useContext(EventsContext);

  const event = events.find((e: any) => e.id === id);

  if (!event) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Event not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{event.title}</Text>

      <Text style={styles.label}>Type</Text>
      <Text style={styles.value}>{event.type}</Text>

      <Text style={styles.label}>Severity</Text>
      <Text style={styles.value}>{event.severity}</Text>

      <Text style={styles.label}>Date</Text>
      <Text style={styles.value}>{event.date}</Text>

      <Text style={styles.label}>Description</Text>
      <Text style={styles.value}>{event.description || "No description"}</Text>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => router.push(`/add-edit?id=${event.id}`)}
      >
        <Text style={styles.editText}>Edit Event</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9fafb" },
  heading: { fontSize: 26, fontWeight: "700", marginBottom: 20 },
  label: { fontSize: 14, fontWeight: "600", marginTop: 12 },
  value: { fontSize: 16, color: "#374151", marginTop: 4 },
  editButton: {
    marginTop: 30,
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 8,
  },
  editText: { color: "white", textAlign: "center", fontWeight: "700" },
  error: { fontSize: 18, color: "red", textAlign: "center", marginTop: 40 },
});
