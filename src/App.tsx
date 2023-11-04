import {TabsProvider} from "components/Tabs/Tabs.provider.tsx";
import {Tab} from "components/Tabs/Tabs.tsx";
import {TabContent} from "components/Tabs/TabContent.tsx";

function App () {
  return (
    <>
      <TabsProvider value={"one"}>
        <div className={"p-2 bg-gray-200"}>
          <Tab value={"one"}>
            One
          </Tab>
          <Tab
            value={"two"}
          >
            Two
          </Tab>
          <Tab
            value={"three"}
          >
            Three
          </Tab>
          <Tab
            value={"four"}
          >
            Four
          </Tab>
        </div>
        <TabContent value={"one"}>
          Some one value
        </TabContent>
        <TabContent value={"four"}>
          Some four value
        </TabContent>
      </TabsProvider>
    </>
  );
}

export default App;
