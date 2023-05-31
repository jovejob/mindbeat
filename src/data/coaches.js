const coaches = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    coachingSessions: [
      {
        id: 1,
        coachId: 1,
        memberId: 1,
        scheduledDateTime: "2023-06-01 12:00:00",
        durationMinutes: 60,
        status: "upcoming",
      },
      {
        id: 2,
        coachId: 1,
        memberId: 2,
        scheduledDateTime: "2023-06-02 14:30:00",
        durationMinutes: 45,
        status: "held",
      },
    ],
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    coachingSessions: [
      {
        id: 3,
        coachId: 2,
        memberId: 3,
        scheduledDateTime: "2023-06-03 10:00:00",
        durationMinutes: 90,
        status: "upcoming",
      },
      {
        id: 4,
        coachId: 2,
        memberId: 4,
        scheduledDateTime: "2023-06-04 16:00:00",
        durationMinutes: 60,
        status: "canceled",
      },
    ],
  },
  // Add more coach objects here
];

export default coaches;
