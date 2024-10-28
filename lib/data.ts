export const emergencies: Emergency[] = [
  {
    id: "e1",
    type: "earthquake",
    location: "Golden Gate Bridge",
    timestamp: "10:46:37 PM",
    status: "critical",
    details: {
      title: "Earthquake Emergency at Golden Gate Bridge",
      timeOfCall: "3:16:37 AM",
      location: "Golden Gate Bridge, San Francisco",
      summary: "Caller reports current earthquakes and requests immediate assistance. Multiple injuries reported.",
      emotions: {
        primary: { type: "Fear", value: 35 },
        secondary: { type: "Confusion", value: 27 }
      }
    },
    transcript: [
      { role: "operator", text: "9-1-1, what's your emergency?" },
      { role: "caller", text: "Um, there's current earthquakes. Um, send help, please." },
      { role: "operator", text: "What's your location?" },
      { role: "caller", text: "I am currently at the Golden Gate Bridge, there's a lot of people injured. Please send help." },
      { role: "operator", text: "Is there immediate danger where you are?" },
      { role: "caller", text: "Um, I'm currently at the Golden Gate Bridge. And we need help. A lot of people here that are injured." }
    ]
  },
  {
    id: "e2",
    type: "fire",
    location: "Mission District",
    timestamp: "10:52:14 PM",
    status: "critical",
    details: {
      title: "Apartment Fire in Mission District",
      timeOfCall: "3:22:14 AM",
      location: "2234 Mission St, San Francisco",
      summary: "Large fire reported in residential building. Multiple residents trapped on upper floors.",
      emotions: {
        primary: { type: "Panic", value: 45 },
        secondary: { type: "Distress", value: 38 }
      }
    },
    transcript: [
      { role: "operator", text: "9-1-1, what's your emergency?" },
      { role: "caller", text: "There's a fire in our building! It's spreading fast!" },
      { role: "operator", text: "What's your location?" },
      { role: "caller", text: "2234 Mission Street! The whole third floor is on fire!" },
      { role: "operator", text: "Are there people trapped inside?" },
      { role: "caller", text: "Yes! I hear people screaming on the upper floors! Please hurry!" }
    ]
  },
  {
    id: "e3",
    type: "medical",
    location: "Fisherman's Wharf",
    timestamp: "10:58:22 PM",
    status: "ongoing",
    details: {
      title: "Mass Casualty Incident at Fisherman's Wharf",
      timeOfCall: "3:28:22 AM",
      location: "Pier 39, San Francisco",
      summary: "Multiple injuries reported after structure collapse at tourist location.",
      emotions: {
        primary: { type: "Shock", value: 32 },
        secondary: { type: "Anxiety", value: 29 }
      }
    },
    transcript: [
      { role: "operator", text: "9-1-1, what's your emergency?" },
      { role: "caller", text: "Part of the pier just collapsed! There are people in the water!" },
      { role: "operator", text: "Which pier are you at?" },
      { role: "caller", text: "Pier 39! Near the sea lion area! Multiple people are injured!" },
      { role: "operator", text: "Are there any immediate life-threatening injuries?" },
      { role: "caller", text: "Yes! Some people aren't moving! We need help now!" }
    ]
  }
];