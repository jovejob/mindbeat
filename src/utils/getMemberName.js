export const getMemberName = (members, memberId) => {
  if (members && Array.isArray(members)) {
    const member = members.find((member) => member.id === memberId);
    if (member) {
      return `${member.firstName} ${member.lastName}`;
    }
  }
  return memberId; // "Unknown Member"
};
