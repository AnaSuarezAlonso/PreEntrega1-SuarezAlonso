export default function ItemListContainer({greeting}) {
  return(
    <div className="flex h-screen bg-slate-50 items-center justify-center">
      <h1>{greeting}</h1>
    </div>
  )
}