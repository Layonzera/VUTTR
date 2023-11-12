const db = require('../database');

class ToolsRepositories {
  async findAll() {
    const row = await db.query(`
      SELECT * FROM tools
    `);
    return row;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT * FROM tools
      WHERE id = $1
    `, [id]);

    return row;
  }

  async create({
    title, link, description, tags,
  }) {
    const [row] = await db.query(`
      INSERT INTO tools(title, link, description, tags)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [title, link, description, tags]);

    return row;
  }

  async update(id, {
    title, link, description, tags,
  }) {
    const [row] = await db.query(`
      UPDATE tools
      SET title = $1, link = $2, description = $3, tags = $4
      WHERE id = $5
      RETURNING *
    `, [title, link, description, tags, id]);

    return row;
  }

  async delete(id) {
    const [row] = await db.query(`
      DELETE FROM tools
      WHERE id = $1
    `, [id]);

    return row;
  }
}

module.exports = new ToolsRepositories();
