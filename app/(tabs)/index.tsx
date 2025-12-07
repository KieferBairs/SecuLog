import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useContext, useState, useMemo } from "react";
import { EventsContext } from "../../context/EventsContext";
import { router } from "expo-router";
import { EventItem } from "../../components/EventItem";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

export default function HomeScreen() {
  const { events } = useContext(EventsContext);
  const [search, setSearch] = useState("");
  const [severityFilter, setSeverityFilter] = useState("All");

  // Export logs to JSON file
  const handleExport = async () => {
    try {
      const json = JSON.stringify(events, null, 2); // prettified JSON
      const fileUri = (FileSystem as any).documentDirectory + "seculog_export.json";

      await FileSystem.writeAsStringAsync(fileUri, json);
      await Sharing.shareAsync(fileUri);
    } catch (error) {
      console.error("Export failed:", error);
    }
  };

  // Sorting + filtering logic
  const filteredEvents = useMemo(() => {
    let data = [...events];

    // Sort newest first
    data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Filter by severity
    if (severityFilter !== "All") {
      data = data.filter(event => event.severity === severityFilter);
    }

    // Search filter
    if (search.trim() !== "") {
      const lower = search.toLowerCase();
      data = data.filter(event =>
        event.title.toLowerCase().includes(lower) ||
        event.type.toLowerCase().includes(lower) ||
        event.description.toLowerCase().includes(lower)
      );
    }

    return data;
  }, [events, search, severityFilter]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Security Events</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.search}
        placeholder="Search events..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Severity Filters */}
      <View style={styles.filters}>
        {["All", "High", "Medium", "Low"].map(level => (
          <TouchableOpacity
            key={level}
            onPress={() => setSeverityFilter(level)}
            style={[
              styles.filterButton,
              severityFilter === level && styles.filterButtonActive
            ]}
          >
            <Text
              style={[
                styles.filterText,
                severityFilter === level && styles.filterTextActive
              ]}
            >
              {level}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {filteredEvents.length === 0 ? (
        <Text style={styles.empty}>No events found.</Text>
      ) : (
        <FlatList
          data={filteredEvents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <EventItem
              event={item}
              onPress={() => router.push(`/details?id=${item.id}`)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 120 }}
        />
      )}

      {/* Export Button */}
      <TouchableOpacity
        style={styles.exportButton}
        onPress={handleExport}
      >
        <Text style={styles.exportText}>📤 Export Logs</Text>
      </TouchableOpacity>

      {/* Add Event Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push("/add-edit")}
      >
        <Text style={styles.addText}>＋ Log Event</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f9fafb" },
  heading: { fontSize: 28, fontWeight: "700", marginBottom: 12 },

  search: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    marginBottom: 10,
  },

  filters: { flexDirection: "row", marginBottom: 12 },

  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#d1d5db",
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
  },

  filterText: { color: "#374151" },
  filterTextActive: { color: "white", fontWeight: "600" },

  empty: { marginTop: 20, color: "#6b7280", fontSize: 16 },

  addButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#2563eb",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
  },
  addText: { color: "white", fontSize: 16, fontWeight: "600" },

  exportButton: {
    position: "absolute",
    bottom: 90,
    right: 20,
    backgroundColor: "#4b5563",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
  },
  exportText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
