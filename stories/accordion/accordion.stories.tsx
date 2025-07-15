import { Accordion } from '@ark-ui/react/accordion';
import type { StoryObj } from '@storybook/react-vite';
import { ChevronDown } from 'lucide-react';
import './accordion.css';

const meta = {
  title: 'Accordion',
  parameters: {
    layout: 'centered',
  },
};

const AccordionItemBody = ({ children }: { children: React.ReactNode }) => (
  <div data-scope='accordion' data-part='item-body'>
    {children}
  </div>
);

export const Size: Story = {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
          width: '480px',
        }}
      >
        <Accordion.Root
          defaultValue={['React']}
          collapsible
          className='accordion--size-sm accordion--variant-outline'
        >
          {['React', 'Solid', 'Vue'].map((item) => (
            <Accordion.Item key={item} value={item}>
              <Accordion.ItemTrigger>
                What is {item}?
                <Accordion.ItemIndicator>
                  <ChevronDown />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <AccordionItemBody>
                  {item} is a JavaScript library for building user interfaces.
                </AccordionItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <Accordion.Root
          defaultValue={['React']}
          collapsible
          className='accordion--size-md accordion--variant-outline'
        >
          {['React', 'Solid', 'Vue'].map((item) => (
            <Accordion.Item key={item} value={item}>
              <Accordion.ItemTrigger>
                What is {item}?
                <Accordion.ItemIndicator>
                  <ChevronDown />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <AccordionItemBody>
                  {item} is a JavaScript library for building user interfaces.
                </AccordionItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <Accordion.Root
          defaultValue={['React']}
          collapsible
          className='accordion--size-lg accordion--variant-outline'
        >
          {['React', 'Solid', 'Vue'].map((item) => (
            <Accordion.Item key={item} value={item}>
              <Accordion.ItemTrigger>
                What is {item}?
                <Accordion.ItemIndicator>
                  <ChevronDown />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <AccordionItemBody>
                  {item} is a JavaScript library for building user interfaces.
                </AccordionItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    );
  },
};

export const Variants: Story = {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
          width: '480px',
        }}
      >
        <Accordion.Root
          defaultValue={['React']}
          collapsible
          className='accordion--size-sm accordion--variant-outline'
        >
          {['React', 'Solid', 'Vue'].map((item) => (
            <Accordion.Item key={item} value={item}>
              <Accordion.ItemTrigger>
                What is {item}?
                <Accordion.ItemIndicator>
                  <ChevronDown />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <AccordionItemBody>
                  {item} is a JavaScript library for building user interfaces.
                </AccordionItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <Accordion.Root
          defaultValue={['React']}
          collapsible
          className='accordion--size-sm accordion--variant-subtle'
        >
          {['React', 'Solid', 'Vue'].map((item) => (
            <Accordion.Item key={item} value={item}>
              <Accordion.ItemTrigger>
                What is {item}?
                <Accordion.ItemIndicator>
                  <ChevronDown />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <AccordionItemBody>
                  {item} is a JavaScript library for building user interfaces.
                </AccordionItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <Accordion.Root
          defaultValue={['React']}
          collapsible
          className='accordion--size-sm accordion--variant-enclosed'
        >
          {['React', 'Solid', 'Vue'].map((item) => (
            <Accordion.Item key={item} value={item}>
              <Accordion.ItemTrigger>
                What is {item}?
                <Accordion.ItemIndicator>
                  <ChevronDown />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <AccordionItemBody>
                  {item} is a JavaScript library for building user interfaces.
                </AccordionItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    );
  },
};

export const DisabledItem: Story = {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
          width: '480px',
        }}
      >
        <Accordion.Root
          defaultValue={['React']}
          collapsible
          className='accordion--size-sm accordion--variant-subtle'
        >
          {['React', 'Solid', 'Vue'].map((item) => (
            <Accordion.Item key={item} value={item} disabled={item === 'Solid'}>
              <Accordion.ItemTrigger>
                What is {item}?
                <Accordion.ItemIndicator>
                  <ChevronDown />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <AccordionItemBody>
                  {item} is a JavaScript library for building user interfaces.
                </AccordionItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <Accordion.Root
          defaultValue={['React']}
          collapsible
          className='accordion--size-sm accordion--variant-enclosed'
        >
          {['React', 'Solid', 'Vue'].map((item) => (
            <Accordion.Item key={item} value={item} disabled={item === 'Vue'}>
              <Accordion.ItemTrigger>
                What is {item}?
                <Accordion.ItemIndicator>
                  <ChevronDown />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <AccordionItemBody>
                  {item} is a JavaScript library for building user interfaces.
                </AccordionItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    );
  },
};

export const WithAction: Story = {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
          width: '480px',
        }}
      >
        <Accordion.Root
          defaultValue={['React']}
          collapsible
          className='accordion--size-sm accordion--variant-outline'
        >
          {['React', 'Solid', 'Vue'].map((item) => (
            <Accordion.Item key={item} value={item}>
              <Accordion.ItemTrigger>
                What is {item}?
                <div className='button button--variant-outline button--size-sm'>
                  Action
                </div>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <AccordionItemBody>
                  {item} is a JavaScript library for building user interfaces.
                </AccordionItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
