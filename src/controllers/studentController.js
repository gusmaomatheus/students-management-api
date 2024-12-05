import Student from "../models/studentModel.js";

export const getAllStudents = async (_, response) => {
  try {
    const students = await Student.find();

    response.status(200).json(students);
  } catch (error) {
    response.status(500).json({
      statusCode: 500,
      statusText: "INTERNAL_SERVER_ERROR",
      message: "Erro ao buscar alunos.",
      error: error,
    });
  }
};

export const getStudentById = async (request, response) => {
  try {
    const student = await Student.findOne({ id: request.params.id });

    if (!student) {
      return response.status(404).json({
        statusCode: 404,
        statusText: "NOT_FOUND",
        message: "Aluno não encontrado.",
      });
    }

    response.status(200).json(student);
  } catch (error) {
    response.status(500).json({
      statusCode: 500,
      statusText: "INTERNAL_SERVER_ERROR",
      message: "Erro ao buscar alunos.",
      error: error,
    });
  }
};

export const createStudent = async (request, response) => {
  const { id, nome, ra, nota1, nota2 } = request.body;

  try {
    const newStudent = new Student({ id, nome, ra, nota1, nota2 });

    await newStudent.save();

    response.status(201).json({
      statusCode: 201,
      statusText: "CREATED",
      message: "Aluno criado com sucesso.",
    });
  } catch (error) {
    response.status(400).json({
      statusCode: 400,
      statusText: "BAD_REQUEST",
      message: "Erro ao criar aluno.",
      error: error,
    });
  }
};

export const updateStudent = async (request, response) => {
  try {
    const updatedStudent = await Student.findOneAndUpdate(
      { id: request.params.id },
      request.body,
      { new: true }
    );
    if (!updatedStudent) {
      return response.status(404).json({
        statusCode: 404,
        statusText: "NOT_FOUND",
        message: "Aluno não encontrado.",
      });
    }
    response.status(200).json(updatedStudent);
  } catch (error) {
    response.status(400).json({
      statusCode: 400,
      statusText: "BAD_REQUEST",
      message: "Erro ao atualizar aluno.",
      error: error,
    });
  }
};

export const deleteStudent = async (request, response) => {
  try {
    const deletedStudent = await Student.findOneAndDelete({
      id: request.params.id,
    });

    if (!deletedStudent) {
      return response.status(404).json({
        statusCode: 404,
        statusText: "NOT_FOUND",
        message: "Aluno não encontrado.",
      });
    }
    response.status(204).json({
      statusCode: 204,
      statusText: "NO_CONTENT",
      message: "Aluno deletado com sucesso.",
    });
  } catch (error) {
    response.status(400).json({
      statusCode: 400,
      statusText: "BAD_REQUEST",
      message: "Erro ao deletar aluno.",
      error: error,
    });
  }
};

export const getApprovedStudents = async (_, response) => {
  try {
    const students = await Student.find();
    const result = students.map((student) => {
      const average = (student.nota1 + student.nota2) / 2;
      return {
        nome: student.nome,
        status: average >= 6 ? "Aprovado" : "Reprovado",
      };
    });
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json({
      statusCode: 500,
      statusText: "INTERNAL_SERVER_ERROR",
      message: "Erro ao buscar alunos.",
      error: error,
    });
  }
};
