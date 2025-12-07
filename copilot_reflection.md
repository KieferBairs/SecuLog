Copilot Reflection

I used GitHub Copilot throughout this project to:
- Scaffold basic React Native component structures
- Suggest helper functions for navigation and state updates
- Generate dropdown UI patterns
- Propose styled components and layout patterns
- Reduce repetitive boilerplate (e.g., FlatList render items)
- Copilot helped accelerate development while I handled:
- Architectural structure
- State management design
- Validation of each suggestion
- Ensuring suggestions matched Expo Router patterns

When Copilot Was Wrong:

Copilot sometimes suggested React Navigation code even though this project uses Expo Router, causing mismatched imports and incompatible navigation props.

  Example incorrect suggestion:
  - navigation.navigate("AddEditEvent")
  
  I corrected it to:
  - router.push("/add-edit")

I verified that all navigation worked inside the Expo Router stack.

Copilot greatly sped up:
- Generating the initial FlatList layout
- Creating repeating dropdown items
- Writing styles for badges and menus
- Producing the JSON export boilerplate using expo-file-system
- Instead of writing large repetitive UI blocks manually, Copilot produced usable templates I refined and integrated.

Final Reflection:

I used Copilot as an assistant, not a crutch.
I ensured I fully understood each code block, made improvements when suggestions didn’t fit my architecture, and used Copilot to enhance — not replace — my own development skills.
This approach aligns with course expectations for responsible AI-assisted development.
