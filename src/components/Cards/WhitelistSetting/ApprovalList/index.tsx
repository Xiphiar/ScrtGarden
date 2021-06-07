import { FC, memo, useState } from 'react'

import { UISnip721Approval } from '../../../../../interface/nft-ui'
import { Body, Head, HeaderCell, HeaderRow } from '../../../UI/Table'
import Item from './Item'
import { Container, Placeholder, StyledEmptyList, StyledTable } from './styles'

export type Props = {
  list: UISnip721Approval[]
}

const ApprovalList: FC<Props> = ({ list }) => {
  const [selected, setSelected] = useState('')

  const onToggle = (address: string) => {
    address !== selected
      ? setSelected(address)
      : setSelected(selected ? '' : address)
  }

  if (list.length === 0) {
    return (
      <Placeholder>
        <StyledEmptyList text="No whitelisted addresses" icon="list-ul-duo" />
      </Placeholder>
    )
  }

  return (
    <Container>
      <StyledTable>
        <Head>
          <HeaderRow>
            <HeaderCell align="left">Address</HeaderCell>
            <HeaderCell align="left">Permissions</HeaderCell>
            <HeaderCell align="left">Expiration</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          {list.map((approved) => (
            <Item
              key={approved.address}
              item={approved}
              isOpen={selected === approved.address}
              toggle={onToggle}
            />
          ))}
        </Body>
      </StyledTable>
    </Container>
  )
}

export default memo(ApprovalList)
