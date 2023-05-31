const memberCoachingSessions = [
  {
    id: '1',
    firstName: 'Alice',
    lastName: 'Johnson',
    sessions: [
      {
        id: '1',
        coach: {
          firstName: 'John',
          lastName: 'Smith',
        },
        scheduledDateTime: '2023-05-28 10:00 AM',
        status: 'upcoming',
      },
      {
        id: '2',
        coach: {
          firstName: 'Jane',
          lastName: 'Doe',
        },
        scheduledDateTime: '2023-05-29 2:00 PM',
        status: 'ongoing',
      },
      // Add more coaching sessions for Alice as needed
    ],
  },
  {
    id: '2',
    firstName: 'Bob',
    lastName: 'Williams',
    sessions: [
      {
        id: '3',
        coach: {
          firstName: 'John',
          lastName: 'Smith',
        },
        scheduledDateTime: '2023-06-01 9:00 AM',
        status: 'held',
      },
      // Add more coaching sessions for Bob as needed
    ],
  },
  // Add more members with their coaching sessions as needed
];

export default memberCoachingSessions;
