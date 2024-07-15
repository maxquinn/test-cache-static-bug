export const dynamicParams = false;

const routes = [
  'should-work',
  'another-test',
]

export const generateStaticParams = () => routes.map((name) => ({ test: name }));

export interface TestPageProps {
  params: { test: string };
}

const TestPage = async ({
  params: { test },
}: TestPageProps) => (
  <div>
    <p>{test}</p>
  </div>
);

export default TestPage;
