import Card from "./components/Card";
import Container from "react-bootstrap/Container";
import { Stack } from "react-bootstrap";

function App() {
  // const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  // const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  // const { budgets, getBudgetExpenses } = useBudgets();
  // const [expense, setExpense] = useState([
  //   {
  //     id: 1,
  //     project_id: 2,
  //     category_id: 2,
  //     name: "Server Maintenance",
  //     description:
  //       "Server maintenance and upgrading work to incorporate BC plans",
  //     amount: 30000,
  //     created_at: "2021-11-04T16:00:00.000Z",
  //     created_by: "Jacky",
  //     updated_at: "2021-11-06T16:00:00.000Z",
  //     updated_by: "Jacky",
  //   },
  //   {
  //     id: 2,
  //     project_id: 3,
  //     category_id: 4,
  //     name: "Consultant",
  //     description: "Consultancy services for integration work",
  //     amount: 10000,
  //     created_at: "2021-11-06T16:00:00.000Z",
  //     created_by: "Helen",
  //     updated_at: "2021-11-07T16:00:00.000Z",
  //     updated_by: "Helen",
  //   },
  // ]);
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Project 1</h1>
      </Stack>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
          alignItems: "flex-start",
        }}
      >
        <Card name="Expense 1"></Card>
        <Card name="Expense 2"></Card>
        <Card name="Expense 3"></Card>
      </div>
    </Container>
  );
}

export default App;
