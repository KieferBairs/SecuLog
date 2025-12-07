# SecuLog – Mobile Cybersecurity Event Logger

SecuLog is a mobile cybersecurity logging application built with **React Native**, **Expo**, and **Expo Router**.  
It allows users to record, review, filter, search, and export security-related events in a clean, SIEM-inspired interface.

This project was built as part of my mobile development course, using **GitHub Copilot** responsibly to assist with scaffolding, UI patterns, and boilerplate code while ensuring I fully understood and validated every suggestion.

---

## 📱 Features

### 🔐 Core Functionality
- Add new security events (title, type, severity, description, date)
- Edit existing events
- View detailed event information on a dedicated screen

### 🧠 Enhanced UX (Professional-Level Features)
- Dropdown menus for **Event Type** and **Severity**  
- Color-coded severity badges (High/Medium/Low)
- Live search bar across all events
- Triaging filters for severity (All, High, Medium, Low)
- Sorted event list (newest first)

### 📤 JSON Export (WOW Feature)
Export all logged events into a structured JSON file using:
- `expo-file-system`
- `expo-sharing`

Perfect for:
- Attaching logs to tickets  
- Importing into SIEMs  
- Sharing with analysts  
- Incident report documentation  

### 📂 State & Architecture
- Global state via React Context
- Expo Router for navigation
- Modular component structure

---

## 🚀 Getting Started

### 1. Install Dependencies

npm install
npx expo install expo-file-system expo-sharing

### 2. Run the App

npx expo start

### 3. Open in:

iOS Simulator
Android Emulator
Expo Go app (scan QR code)

![758301A6-2FB3-4![87DE1619-482E-4816-9074-4BDA37D6A667_4_5005_c](https://github.com/user-attachments/assets/5d589096-d941-43bb-bf9a-b92b366cf34d)
02D-A4ED-D3824E2EC7E8_4_5005_c](https://github.com/user-attachments/assets/85ad8c66-1f19-4947-a8dd-2852fbe5e76f)
![D3992591-218F-4DA8-97C7-3F2FCFFDA7BC_4_5005_c](https://github.com/user-attachments/assets/92c41392-83a4-43b2-bb90-b1c27b123b25)


