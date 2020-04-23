import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: (Dimensions.get('window').width * 0.1) / 4,
    paddingVertical: (Dimensions.get('window').width * 0.1) / 2,
  },
  listContainer: {
    marginHorizontal: '2%',
  },
  list: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingVertical: Dimensions.get('window').height < 700 ? '1%' : '4%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomWidth: 0,
    backgroundColor: colors.snowWhite,
  },
  card: {
    borderBottomWidth: 0.2,
    paddingVertical: '4%',
  },
  paddingLeft: {
    paddingLeft: '2.5%',
  },
  showSerial: {
    backgroundColor: colors.darkWhite,
    borderColor: colors.lightestGrey,
    width: '40%',
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderBottomWidth: 2,
    borderRadius: 3,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 8,
  },
  title: {
    fontSize: 17,
    color: colors.lightGrey,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.lightGrey,
  },
  image: {
    width: 25,
    height: 25,
  },
  marginBottom: {
    marginBottom: '5%',
  },
});

export default styles;
