
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

interface Props {
    rows: Array<{
      id: number;
      author: string;
      text: string;
      age: number;
    }>;
  }


export function MyTable({ rows }: Props) {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Quote</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Age Emoji</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.text}</TableCell>
                <TableCell>{row.author}</TableCell>
                <TableCell>{row.age < 50 ? "👶" : "🧓"} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}