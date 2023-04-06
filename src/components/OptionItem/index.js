import {ListOptionItem, OptionButton, OptionImage} from './styledComponents'

const OptionItem = props => {
  const {data, setGameResult} = props
  const {id} = data
  const setResult = () => {
    setGameResult(data.id)
  }
  const dataAttribute = `${id.toLowerCase()}Button`
  return (
    <ListOptionItem>
      <OptionButton
        type="button"
        data-testid={dataAttribute}
        onClick={setResult}
      >
        <OptionImage src={data.imageUrl} alt={data.id} />
      </OptionButton>
    </ListOptionItem>
  )
}

export default OptionItem
