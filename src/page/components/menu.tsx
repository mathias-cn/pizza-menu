import { Pizza } from './pizza';
export function Menu() {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our menu</h2>
            <Pizza />
        </div>
    )
}