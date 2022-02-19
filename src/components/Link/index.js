import NextLink from 'next/link'
import LinkEstilizado from '../LinkEstilizado'

export default function Link({ children, href, ...rest }) {
  return (
    <NextLink href={href}>
      <LinkEstilizado {...rest}>{children}</LinkEstilizado>
    </NextLink>
  )
}
