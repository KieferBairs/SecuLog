import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import { EventsContext } from "../../context/EventsContext";
import { router } from "expo-router";
import { EventItem } from "../../components/EventItem";


export default function HomeScreen() {
  const { events } = useContext(EventsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Security Events</Text>

      {events.length === 0 ? (
        <Text style={styles.empty}>No events logged yet.</Text>
      ) : (
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <EventItem
              event={item}
              onPress={() => router.push(`/add-edit?id=${item.id}`)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      )}

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
  heading: { fontSize: 24, fontWeight: "700", marginBottom: 12 },
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
});
