export function Pizza() {    
    const pizzaData = [
        {
          name: "Focaccia",
          ingredients: "Bread with italian olive oil and rosemary",
          price: 6,
          photoName: "pizzas/focaccia.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Margherita",
          ingredients: "Tomato and mozarella",
          price: 10,
          photoName: "pizzas/margherita.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Spinaci",
          ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
          price: 12,
          photoName: "pizzas/spinaci.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Funghi",
          ingredients: "Tomato, mozarella, mushrooms, and onion",
          price: 12,
          photoName: "pizzas/funghi.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Salamino",
          ingredients: "Tomato, mozarella, and pepperoni",
          price: 15,
          photoName: "pizzas/salamino.jpg",
          soldOut: true,
        },
        {
          name: "Pizza Prosciutto",
          ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
          price: 18,
          photoName: "pizzas/prosciutto.jpg",
          soldOut: false,
        },
    ];  

    return (
        <div className="flex flex-wrap gap-4 justify-between items-center">
            {pizzaData.map(pizza => {
                return (
                    <div key={pizza.name} className="w-full sm:w-[calc(50%-12px)] flex gap-2 bg-amber-200 rounded-xl">
                        <img src={pizza.photoName} alt={pizza.name} className="w-48 h-48 object-cover shrink-0 rounded-s-xl" />
                        <div className="text-left p-3 flex flex-col">
                          <div className="flex-1 h-max">
                            <h2 className="font-semibold text-2xl">{pizza.name}</h2>
                            <p className="text-lg">{pizza.ingredients}</p>
                          </div>

                          {pizza.soldOut ? (
                            <span className="text-lg align-bottom text-red-500 font-semibold uppercase">Sem Estoque</span>
                          ) : (
                            <span className="text-lg align-bottom">${pizza.price}</span>
                          )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}