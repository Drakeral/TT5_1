import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utilis";

export default function BudgetCard({ name, amount }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title
          className="d-flex justify-content-between
        align-items-baseline fw-normal mb-3"
        >
          <div>{name}</div>
          <div>{currencyFormatter.format(amount)}</div>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
