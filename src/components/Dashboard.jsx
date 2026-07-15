function Dashboard() {
  const isLoggedIn = false;

  return (
      <div style={{ backgroundColor: "brown", padding:"20px" }}>
      <h1>{isLoggedIn ? "Welcome Back!" : "Please Login"}</h1>
    </div>
  );
}

export default Dashboard;
