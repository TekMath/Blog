export default function Menu() {
  return (
    <menu className="py-3 px-6 border-b-2 border-dashed border-[#5f5f5f]">
      <div className="flex justify-end text-lg gap-3">
        <li>
          <button className="hover:font-bold">math</button>
        </li>
        <p className="hover:cursor-default">・</p>
        <li>
          <button className="hover:font-bold">about</button>
        </li>
        <li>
          <button className="hover:font-bold">blog</button>
        </li>
      </div>
    </menu>
  );
}
