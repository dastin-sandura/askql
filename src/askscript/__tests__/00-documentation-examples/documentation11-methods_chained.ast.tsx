export = (
  <ask args={<list />}>
    <return
      value={
        <call
          name="multiply"
          args={
            <list>
              {7}
              <call
                name="plus"
                args={
                  <list>
                    {8}
                    <call
                      name="minus"
                      args={
                        <list>
                          {1}
                          {4}
                        </list>
                      }
                    />
                  </list>
                }
              />
            </list>
          }
        />
      }
    />
    <call
      name="multiply"
      args={
        <list>
          {2}
          <call
            name="plus"
            args={
              <list>
                {3}
                <call
                  name="minus"
                  args={
                    <list>
                      {4}
                      {1}
                    </list>
                  }
                />
              </list>
            }
          />
        </list>
      }
    />
  </ask>
);