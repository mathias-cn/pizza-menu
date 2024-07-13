export function Footer() {
    const currentHour = new Date().getHours() 
    const workingHours = {
        open: 16,
        close: 23
    }

    return (
        <footer> 
                {currentHour > workingHours.open && currentHour < workingHours.close 
                ? (<p className="text-3xl">{new Date().toLocaleTimeString()} - We're currently open!</p>) 
                : (<p className="text-3xl text-red-500">{new Date().toLocaleTimeString()} - We're closed. Comeback at ${workingHours.open} hours</p>)
                }
        </footer>
    )
}