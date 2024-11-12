import { Image, StyleSheet, View } from "react-native";
import Text from './Text'
import theme from "../theme";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'space-around',
  },
  elementBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  descriptionBox: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  avatarBox: {
    width: 50,
    height: 50,
    marginTop: 10
  },
  avatar: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  descriptionTextBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexShrink: 1,
    marginHorizontal: 15,
  },
  tag: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    alignSelf: 'flex-start'
  },
  languageTag: {
    color: 'white',
    marginHorizontal: 5,
  }
});

const RepositoryDescription = ({item}) => {
  return (
    <View>
      <View style={styles.descriptionBox}>
        <View style={styles.avatarBox}>
          <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        </View>
        <View style={styles.descriptionTextBox}>
          <Text fontSize='subheading' fontWeight='bold'>{item.fullName}</Text>
          <Text color='textSecondary'>{item.description}</Text>
          <View style={styles.tag}>
            <Text style={styles.languageTag}>{item.language}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const RepositoryStats = ({item}) => {

  const formatNumber = (num) => {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
    const item = lookup.findLast(item => num >= item.value);
    return item ? (num / item.value).toFixed(1).replace(regexp, "").concat(item.symbol) : "0";
  }

  return (
    <View style={styles.statsContainer}>
      <View style={styles.elementBox}>
        <Text>Stars</Text>
        <Text color="textSecondary">{formatNumber(item.stargazersCount)}</Text>
      </View>
      <View style={styles.elementBox}>
        <Text>Forks</Text>
        <Text color="textSecondary">{formatNumber(item.forksCount)}</Text>
      </View>
      <View style={styles.elementBox}>
        <Text>Reviews</Text>
        <Text color="textSecondary">{formatNumber(item.reviewCount)}</Text>
      </View>
      <View style={styles.elementBox}>
        <Text>Rating</Text>
        <Text color="textSecondary">{item.ratingAverage}</Text>
      </View>
    </View>
  )
}

const RepositoryItem = ({item}) => {

  return (
    <View style={styles.card}>
      <RepositoryDescription item={item} />
      <RepositoryStats item={item} />
    </View>
  )
}

export default RepositoryItem;