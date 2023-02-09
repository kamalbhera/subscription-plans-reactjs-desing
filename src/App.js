import "./App.css";
import Card from "./Card";

function App() {
  let free = {
    title: "FREE",
    price: 0,
    user: "Single User",
    userEnabler: true,
    storage: "5GB Storage",
    storageEnabler: true,
    publicProjects: "Unlimited Public Projects",
    publicProjectsEnabler: true,
    access: "Community Access",
    accessEnabler: true,
    privateProjects: "Unlimited Private Projects",
    privateProjectsEnabler: false,
    phoneSupport: "Dedicated Phone Support",
    phoneSupportEnabler: false,

    subdomain: "free  Subdomain",
    subdomainEnabler: false,
    reports: "Monthly Status Reports ",
    reportsEnabler: true,
  };

  let plus = {
    title: "PLUS",
    price: 9,
    user: "5 Users",
    userEnabler: true,
    storage: "50GB Storage",
    storageEnabler: true,
    publicProjects: "Unlimited Public Projects",
    publicProjectsEnabler: true,
    access: "Community Access",
    accessEnabler: true,
    privateProjects: "Unlimited Private Projects",
    privateProjectsEnabler: true,
    phoneSupport: "Dedicated Phone Support",
    phoneSupportEnabler: true,
    subdomain: "free  Subdomain",
    subdomainEnabler: true,
    reports: "Monthly Status Reports ",
    reportsEnabler: false,
  };

  let pro = {
    title: "PRO",
    price: 49,
    user: "Unlimited Users",
    userEnabler: true,
    storage: "150GB Storage",
    storageEnabler: true,
    publicProjects: "Unlimited Public Projects",
    publicProjectsEnabler: true,
    access: "Community Access",
    accessEnabler: true,
    privateProjects: "Unlimited Private Projects",
    privateProjectsEnabler: true,
    phoneSupport: "Dedicated Phone Support",
    phoneSupportEnabler: true,
    subdomainPrefix: "Unlimited",
    subdomain: " free  Subdomain",
    subdomainEnabler: true,
    reports: "Monthly Status Reports ",
    reportsEnabler: true,
  };
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <Card type={free} />
          <Card type={plus} />
          <Card type={pro} />
        </div>
      </div>
    </section>
  );
}

export default App;
