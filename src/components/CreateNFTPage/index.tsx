import { Container, InnerContainer } from '../UI/Containers'
import { PageTitle } from '../UI/Typography'
import BackLink from './BackLink'
import Form from './Form'
import ContextStore from './Store'

const CreateNFTPage = () => (
  <Container>
    <InnerContainer>
      <BackLink label="Back" />
      <PageTitle>Create your collectible</PageTitle>
      <ContextStore.Provider>
        <Form />
      </ContextStore.Provider>
    </InnerContainer>
  </Container>
)

export default CreateNFTPage
