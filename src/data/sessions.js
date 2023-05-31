const sessions = [
  {
    id: '1',
    coach: {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
    },
    member: {
      id: '1',
      firstName: 'Alice',
      lastName: 'Johnson',
    },
    scheduledDateTime: '2023-06-01 12:00:00',
    duration: 60,
    status: 'upcoming',
  },
  {
    id: '2',
    coach: {
      id: '2',
      firstName: 'Jane',
      lastName: 'Smith',
    },
    member: {
      id: '2',
      firstName: 'Bob',
      lastName: 'Williams',
    },
    scheduledDateTime: '2023-06-02 14:30:00',
    duration: 45,
    status: 'held',
  },
  // Add more session objects as needed
];

export default sessions;
