import {
    Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, DarkThemeToggle,
    Footer, FooterCopyright, FooterLink, FooterLinkGroup
} from "flowbite-react";

import Link from "next/link";

export function DefaultHeader() {
    return (
        <Navbar className="bg-gray-100">
            <NavbarBrand as={Link} href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Apple Books</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink as={Link} href="/" active>Home</NavbarLink>
                <NavbarLink as={Link} href="/about">About</NavbarLink>
                <NavbarLink as={Link} href="/services">Services</NavbarLink>
                <NavbarLink as={Link} href="/pricing">Pricing</NavbarLink>
                <NavbarLink as={Link} href="/contact">Contact</NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle />
        </Navbar>
    );
}

export function DefaultFooter() {
    return (
        <Footer container className="rounded-none bg-gray-100">
            <FooterCopyright href="https://memoolabi7.github.io/My-Portfolio/" by="memoolabi7™" year={2025} />
            <FooterLinkGroup>
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                <FooterLink href="/licensing">Licensing</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
            </FooterLinkGroup>
        </Footer>
    )
}