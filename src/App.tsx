import {TabsProvider, useTabs} from "components/Tabs/Tabs.provider.tsx";
import {Tab} from "components/Tabs/Tabs.tsx";
import {TabContent} from "components/Tabs/TabContent.tsx";
import {Button} from "components";

const Tabb = () => {
  const {setActiveTab} = useTabs();

  return (
    <TabContent value={"one"}>
      Some one value

      <Button
        onClick={() => {
          setActiveTab("three");
        }}
      >Change to tab 3</Button>
    </TabContent>
  );
};

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
        <Tabb/>
        <TabContent value={"two"}>
          Some two value
        </TabContent>
        <TabContent value={"three"}>
          Some three value
        </TabContent>
        <TabContent value={"four"}>
          Some four value
        </TabContent>
      </TabsProvider>
    </>
  );
}

export default App;
