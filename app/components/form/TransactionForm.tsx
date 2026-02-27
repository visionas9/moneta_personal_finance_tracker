import Form from "next/form";

export default function TransactionForm() {
  return (
    <Form action="">
      {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
      <input name="query" />
      <button type="submit">Submit</button>
    </Form>
  );
}
