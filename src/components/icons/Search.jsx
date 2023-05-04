import styled from "styled-components";

const SearchSVG = styled.svg`
	path {
		fill: ${({ currentPath }) =>
			currentPath === "/" ||
			currentPath === "/login" ||
			currentPath === "/register"
				? "var(--color-secondary)"
				: "var(--color-primary)"};
	}
`;

export const Search = ({ currentPath }) => {
	return (
		<SearchSVG
			currentPath={currentPath}
			width="32"
			height="29"
			viewBox="0 0 32 29"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M4.42097 16.6521L5.38774 16.4019L4.42097 16.6521ZM4.42097 10.0582L5.38774 10.3084L4.42097 10.0582ZM25.0524 10.0582L26.0192 9.80794L25.0524 10.0582ZM25.0524 16.6521L26.0192 16.9023L25.0524 16.6521ZM18.3747 22.7038L18.1671 21.727L18.3747 22.7038ZM11.0987 22.7038L10.891 23.6806L11.0987 22.7038ZM11.0987 4.0065L10.891 3.0297L11.0987 4.0065ZM18.3747 4.0065L18.5824 3.0297L18.3747 4.0065ZM27.3294 26.115C27.7381 26.4853 28.3696 26.4543 28.74 26.0456C29.1103 25.6369 29.0793 25.0054 28.6706 24.635L27.3294 26.115ZM5.38774 16.4019C4.86893 14.3974 4.86893 12.3128 5.38774 10.3084L3.4542 9.80793C2.85042 12.1406 2.85042 14.5697 3.4542 16.9023L5.38774 16.4019ZM24.0857 10.3084C24.6045 12.3128 24.6045 14.3974 24.0857 16.4019L26.0192 16.9023C26.623 14.5697 26.623 12.1406 26.0192 9.80794L24.0857 10.3084ZM18.1671 21.727C15.9111 22.2065 13.5623 22.2065 11.3063 21.727L10.891 23.6806C13.4208 24.2183 16.0526 24.2183 18.5824 23.6806L18.1671 21.727ZM11.3063 4.98331C13.5623 4.50374 15.9111 4.50374 18.1671 4.98331L18.5824 3.0297C16.0526 2.49192 13.4208 2.49192 10.891 3.0297L11.3063 4.98331ZM11.3063 21.727C8.32063 21.0923 6.05965 18.9977 5.38774 16.4019L3.4542 16.9023C4.33672 20.312 7.24996 22.9066 10.891 23.6806L11.3063 21.727ZM18.5824 23.6806C22.2234 22.9066 25.1367 20.312 26.0192 16.9023L24.0857 16.4019C23.4138 18.9977 21.1528 21.0923 18.1671 21.727L18.5824 23.6806ZM18.1671 4.98331C21.1528 5.618 23.4138 7.71253 24.0857 10.3084L26.0192 9.80794C25.1367 6.39832 22.2234 3.80371 18.5824 3.0297L18.1671 4.98331ZM10.891 3.0297C7.24996 3.80371 4.33672 6.39832 3.4542 9.80793L5.38774 10.3084C6.05965 7.71252 8.32063 5.618 11.3063 4.98331L10.891 3.0297ZM22.4429 21.6866L27.3294 26.115L28.6706 24.635L23.7841 20.2067L22.4429 21.6866Z" />
		</SearchSVG>
	);
};
