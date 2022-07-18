import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Section from './Section';
import { Container } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';
import Notification from './Notification';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {contacts.length > 1 && <Filter />}
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <Notification message="Your contactlist is empty" />
        )}
      </Section>
    </Container>
  );
}
