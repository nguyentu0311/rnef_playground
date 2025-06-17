/* eslint-disable react-native/no-inline-styles */
import {createContext, ReactNode, useMemo} from 'react';
import {View} from 'react-native';
import {vars} from 'nativewind';

interface StyleContextType {
  vars: Record<string, string>;
}
const VariableContext = createContext<StyleContextType | undefined>(undefined);

interface StyleProviderProps {
  variables: Record<string, string>;
  children: ReactNode;
}
export const VarProvider = ({variables, children}: StyleProviderProps) => {
  const generatedVars = useMemo(() => vars(variables), [variables]);

  return (
    <VariableContext.Provider value={{vars: generatedVars}}>
      <View style={[{flex: 1, height: '100%', width: '100%'}, generatedVars]}>
        {children}
      </View>
    </VariableContext.Provider>
  );
};
