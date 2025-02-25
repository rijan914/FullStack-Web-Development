// props types and defaultprops
import PropTypes from 'prop-types';

function Student({studentName = "Guest", age = 0, isStudent = false}) {

  return (
    <div className="student">
    <p>
        Name:{studentName}
    </p>
    <p>
        Age:{age}
    </p>
    <p>
        Student:{isStudent ? "Yes" : "No"}
    </p>
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