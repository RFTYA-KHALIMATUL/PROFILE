import { Component } from "../component/component.js";
import { Navbar } from "../component/navbar.js";
import { Footer } from "../component/footer.js";

export class HomePages extends Component{
    render() { 
        const navbar = new Navbar({ namaSekolah: "SMK YADIKA SOREANG - Home"}).
        render();
        const footer = new Footer().render();
        return `${navbar}
        <main>
        <h1>Welcome to SMK YADIKA SOREANG - Home </h1>
        <p>ini adalah halaman utama dari website SMK YADIKA SOREANG</p>
        </main>
        ${footer}
        `;
    }
}

