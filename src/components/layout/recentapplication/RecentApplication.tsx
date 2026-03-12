import "./RecentApplicationStyle.scss";

interface Application {
  id: string;
  user: string;
  amount: string;
  status: "Approved" | "Pending" | "Rejected";
  date: string;
}

const applications: Application[] = [
  {
    id: "#LA001234",
    user: "Adedeji Adebayo",
    amount: "₦500,000",
    status: "Approved",
    date: "Dec 15, 2024",
  },
  {
    id: "#LA001235",
    user: "Bolaji Ogundimu",
    amount: "₦200,000",
    status: "Pending",
    date: "Dec 15, 2024",
  },
  {
    id: "#LA001236",
    user: "Funmilayo Adeyemi",
    amount: "₦1,000,000",
    status: "Rejected",
    date: "Dec 14, 2024",
  },
  {
    id: "#LA001237",
    user: "Tunde Olumide",
    amount: "₦150,000",
    status: "Approved",
    date: "Dec 14, 2024",
  },
  {
    id: "#LA001238",
    user: "Kemi Balogun",
    amount: "₦300,000",
    status: "Pending",
    date: "Dec 13, 2024",
  },
  {
    id: "#LA001239",
    user: "Chinedu Okafor",
    amount: "₦750,000",
    status: "Rejected",
    date: "Dec 12, 2024",
  },
  {
    id: "#LA001240",
    user: "Mary Johnson",
    amount: "₦400,000",
    status: "Approved",
    date: "Dec 12, 2024",
  },
  {
    id: "#LA001241",
    user: "Ahmed Musa",
    amount: "₦250,000",
    status: "Pending",
    date: "Dec 11, 2024",
  },
  {
    id: "#LA001242",
    user: "Ngozi Eze",
    amount: "₦950,000",
    status: "Rejected",
    date: "Dec 11, 2024",
  },
  {
    id: "#LA001243",
    user: "Samuel Peters",
    amount: "₦100,000",
    status: "Approved",
    date: "Dec 10, 2024",
  },
];

const RecentApplications = () => {
  return (
    <div className="main-section">
      <div className="section-header">
        <h2>Recent Applications</h2>
      </div>
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Amount</th>
              <th>Status</th>
              <th className="date">Date</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.user}</td>
                <td>{app.amount}</td>
                <td>
                  <span className={`status ${app.status.toLowerCase()}`}>{app.status}</span>
                </td>
                <td className="date">{app.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentApplications;
