const productsAccess = ({req: {user}}) => {
    // Scenario #1 - Check if user has the 'admin' role
  if (user && user.role === 'admin') {
    return true;
  }

  // Scenario #2 - Allow only documents with the current user set to the 'createdBy' field
  if (user) {

    // Will return access for only documents that were created by the current user
    return {
      tenant_id: {
        equals: user.id,
      },
    };
  }

  // Scenario #3 - Disallow all others
  return false;
}

export default productsAccess;