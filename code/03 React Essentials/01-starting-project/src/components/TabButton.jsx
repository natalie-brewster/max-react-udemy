export default function TabButton({ children, onSelect }) {
  function handleClick() {
    console.log('Hellow World!');
  }

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
