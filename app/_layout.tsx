import { Stack } from "expo-router";
import { EventsProvider } from "../context/EventsContext";

export default function RootLayout() {
  return (
    <EventsProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="add-edit" options={{ title: "Log Event" }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </EventsProvider>
  );
}

