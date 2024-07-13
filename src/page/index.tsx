import { Header } from './components/header';
import { Footer } from "./components/footer";
import { Menu } from './components/menu';

export function Page() {

    return (
        <div className="min-h-full text-center space-y-8 max-w-[1024px] min-w-[760px] py-8 px-3 mx-auto">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}