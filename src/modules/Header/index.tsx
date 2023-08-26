import React from 'react';
import { StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconsStrings from '../../assets/awesomeIcons';
import containerStyles from '../../styles/container';

import {
	SafeAreaView,
	View,
	TouchableOpacity,
	StyleSheet,
	StyleProp,
	ViewStyle,
} from 'react-native';

interface IHeaderScreenProps {
	style?: StyleProp<ViewStyle>;
	onLayout?: () => void;
	backPath?: () => void;
	accept?: () => void;
	rightIcon?: {
		type: string,
		onPress: () => void,
	};
}

const getStatusBarMargin = (): number => {
	const statusBarHeight = StatusBar.currentHeight ?? 0;
	return Platform.OS === 'android' ? statusBarHeight : 0;
};

export const Header = ({
	style,
	backPath,
	accept,
	rightIcon,
	onLayout,
}: IHeaderScreenProps): JSX.Element => {
	return (
		<SafeAreaView onLayout={() => onLayout ? onLayout() : null}>
			<View style={[styles.header, style]}>
				{backPath && <TouchableOpacity
					style={[styles.buttonsPadding, {paddingLeft: 0}]}
					onPress={() => backPath()}
				>
					<Icon name={IconsStrings.arrow} size={24} />
				</TouchableOpacity>
				}
				{accept && <TouchableOpacity
					style={[styles.buttonsPadding, {paddingRight: 0}]}
					onPress={() => accept()}
				>
					<Icon name={IconsStrings.accept} size={24} />
				</TouchableOpacity>}
				{rightIcon && <TouchableOpacity
					style={[styles.buttonsPadding, {paddingRight: 0}]}
					onPress={() => rightIcon.onPress()}
				>
					<Icon name={rightIcon.type} size={24} />
				</TouchableOpacity>}
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	header: {
		marginTop: getStatusBarMargin(),
		height: 50,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		...containerStyles,
	},

	buttonsPadding: {
		padding: 10,
	},
});


