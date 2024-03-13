import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <h1>Personal Digital Assistants</h1>
      <ProfileCard title="Alexa" handle="@alexa99" />
      <ProfileCard title="Cortana" handle="@cortona32" />
      <ProfileCard title="Siri" handle="@siri23" />
    </div>
  );
}

export default App;