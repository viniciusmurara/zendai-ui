import UserMenu from "./user-menu";

export default function Header() {
    return (
        <header className="fixed top-0 right-0 left-[18%] pt-8 bg-beige z-30">
            <div className="h-full px-10 flex items-center justify-end">
                <UserMenu />
            </div>
        </header>
    );
}