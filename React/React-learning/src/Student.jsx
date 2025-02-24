// props types and defaultprops
import PropTypes from 'prop-types';

function Student(props) {

  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  isStudent: false,
  name: "jhyvgi",
  age: 0,
};

export default Student;