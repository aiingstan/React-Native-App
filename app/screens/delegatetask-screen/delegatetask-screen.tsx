import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
// import { useStores } from "../../models/root-store"
import { color } from "../../theme"
import { NavigationScreenProps } from "react-navigation"

export interface DelegatetaskScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export const DelegatetaskScreen: React.FunctionComponent<DelegatetaskScreenProps> = observer((props) => {
  // const { someStore } = useStores()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" tx="delegatetaskScreen.header" />
    </Screen>
  )
})
