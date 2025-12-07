import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function EventItem({ event, onPress }: any) {
  const severityColors: any = {
    High: "#dc2626",
    Medium: "#ea580c",
    Low: "#16a34a",
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.row}>
        <View
          style={[
            styles.dot,
            { backgroundColor: severityColors[event.severity] || "#6b7280" }
          ]}
        />

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
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 12,
  },
  textContainer: { flex: 1 },
  title: { fontSize: 16, fontWeight: "600" },
  type: { fontSize: 14, color: "#6b7280", marginTop: 2 },
  date: { fontSize: 12, color: "#9ca3af", marginTop: 2 },
});
