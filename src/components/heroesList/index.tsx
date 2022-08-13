import { View, FlatList } from 'react-native'

import styles from './style'

import Text from '../text'

/* export const useCachedRequests = (): [
    ApiRequestContextState<MarvelData>,
    IActions,
  ] => {
    return useContext(ApiRequestContext);
  }; */

const HeroesList = () => {

    /* const [state, actions] = useCachedRequests();
  return (
    <View>
      <FlatList
        data={state.data}
        renderItem={() => <Text>TODO</Text>}
        onEndReached={actions.paginate}
      />
    </View>
  ); */

    return <View style={styles.container}><FlatList data={[]} renderItem={() => <Text>TODO</Text>} /></View>
}

export default HeroesList