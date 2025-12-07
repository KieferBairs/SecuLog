import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function EventItem({ event, onPress }: any) {
  const severityColors: any = {
    High: "#dc2626",   // red
    Medium: "#ea580c", // orange
    Low: "#16a34a",    // green
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.row}>
        
        {/* Severity Badge */}
        <View style={[styles.badge, { backgroundColor: severityColors[event.severity] || "#6b7280" }]}>
          <Text style={styles.badgeText}>{event.severity}</Text>
        </View>

        {/* Event Information */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.type}>{event.type}</Text>
          <Text style={styles.date}>{event.date}</Text>
        </View>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  // 🔥 NEW BADGE STYLE
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 12,
  },
  badgeText: {
    color: "white",
    fontWeight: "700",
    fontSize: 12,
  },

  textContainer: { flex: 1 },
  title: { fontSize: 16, fontWeight: "600" },
  type: { fontSize: 14, color: "#6b7280", marginTop: 2 },
  date: { fontSize: 12, color: "#9ca3af", marginTop: 2 },
});
